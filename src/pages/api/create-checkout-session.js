// .../api/create-checkout-session
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
    const { items, email } = req.body;

    //transformar al formato stripe
    const transformItems = items.map(item => ({
        description: item.description,
        quantity: 1,
        price_data: {
            currency: 'usd',
            unit_amount: item.price * 1100,
            product_data: {
                name: item.title,
                images: [item.image]
            },

        }
    }))

    console.log(transformItems)

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_rates: ['shr_1KIDyZE52DCmQ3z5DXRh8DDA'],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA'],
        },
        line_items: transformItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map(item => item.image))
        }
    })

    res.status(200).json({ id: session.id })
}