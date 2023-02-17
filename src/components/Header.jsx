import React from 'react';
import { useTheme } from '../ThemeContext';

const Header = () => {
  const {toggleTheme} = useTheme()
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'flex-start',
			}}
		>
			<h1 style={{ fontSize: '3rem', marginBottom: '4rem' }}>
				My To-Do App
			</h1>

			<button
				style={{
					padding: '1rem 1.5rem',
					fontSize: '1.8rem',
					background: '#222',
					border: 'none',
					borderRadius: '5px',
					color: '#fff',
        }}
        onClick={toggleTheme}
			>
				{' '}
				Theme{' '}
			</button>
		</div>
	);
};

export default Header;
