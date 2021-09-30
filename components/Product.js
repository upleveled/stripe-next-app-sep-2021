/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../public/images/logo.png';
import { Counter } from './Counter';

export function Product(props) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <h1>{props.product.name}</h1>
      <p>{props.product.desc}</p>
      {props.type === 'subscription' ? (
        <img alt={props.product.name} src={props.product.img} />
      ) : (
        <div>
          <img alt={props.product.name} src={props.product.img} />
          <Counter currentValue={quantity} newValueSetter={setQuantity} />
        </div>
      )}
      <button
        onClick={() =>
          props.clickHandler(props.type, props.productKey, quantity)
        }
      >
        Buy for {props.product.price.unit_amount} {props.product.price.currency}
      </button>
    </div>
  );
}
