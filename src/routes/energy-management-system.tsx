import { createFileRoute } from '@tanstack/react-router';
import '../index.css';
export const Route = createFileRoute('/energy-management-system')({
	component: EnergyManagementSystem,
});

import React from 'react';
import SwiperCard from '../components/energy-management-system/SwiperCard';

export default function EnergyManagementSystem() {
	return (
		<div className="h-20">
			<SwiperCard />
		</div>
	);
}
