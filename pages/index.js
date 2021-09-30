import { loadStripe } from '@stripe/stripe-js';
import { Product } from '../components/Product.js';

export default function Home(props) {
  const stripeLoader = loadStripe(props.pk);

  async function handleClick(mode, productKey, quantity = 1) {
    const stripeClient = await stripeLoader;

    const { sessionId } = await fetch('api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity,
        mode,
        productKey,
      }),
    }).then((res) => res.json());

    stripeClient.redirectToCheckout({
      sessionId,
    });
  }
  return (
    <div>
      <Product
        product={props.tablet}
        type="payment"
        clickHandler={handleClick}
        productKey="TABLET"
      />
      <Product
        product={props.magazine}
        type="subscription"
        clickHandler={handleClick}
        productKey="MAGAZINE"
      />
    </div>
  );
}

export async function getServerSideProps() {
  const { products } = await import('../util/database.js');

  // Old syntax don't use it
  // const {Stripe} = await import('stripe');
  // const stripeServer = new Stripe(process.env.STRIPE_SECRET_KEY);

  const Stripe = await import('stripe');
  const stripeServer = Stripe.default(process.env.STRIPE_SECRET_KEY);

  console.log(Stripe);
  console.log(process.env.STRIPE_SECRET_KEY);

  const publicKey = process.env.STRIPE_PUBLISHABLE_KEY;

  const tabletPrice = await stripeServer.prices.retrieve(process.env.TABLET);

  const magazinePrice = await stripeServer.prices.retrieve(
    process.env.MAGAZINE,
  );

  console.log(tabletPrice);

  return {
    props: {
      pk: publicKey,
      tablet: { ...products[0], price: tabletPrice },
      magazine: { ...products[1], price: magazinePrice },
    },
  };
}
