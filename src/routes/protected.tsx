import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedProps {
		allowed: boolean;
		to: string;
}

const Protected: React.FC<ProtectedProps> = ({ allowed, to }) => {
		if (!allowed) return <Navigate to={to} />;

		return <Outlet />;
};

export default Protected;
