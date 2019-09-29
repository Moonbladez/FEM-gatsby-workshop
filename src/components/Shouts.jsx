import React, { useState } from 'react';
import { css } from '@emotion/core';

const Shout = () => {
  const [shouts, setShouts] = useState(0);
  const label = ` 🍔 ${shouts}  ${shouts === 1 ? 'shout' : 'shouts'}`;

  return (
    <button
      css={css`
        background-color: rebeccapurple;
        border: none;
        color: white;
        font-size: 1.25rem;
      `}
      onClick={() => setShouts(shouts + 1)}
    >
      {label}
    </button>
  );
};

export default Shout;
