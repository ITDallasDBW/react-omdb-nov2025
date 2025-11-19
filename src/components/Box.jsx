import React from 'react'

function Box({children}:import('react').PropsWithChildren<unknown>) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        display: 'block',
        lineHeight: 2,
        padding: '1rem',
        marginBottom: '0.5rem',
        width: 100,
      }}
    >{children}</div>
  );
}

export default Box