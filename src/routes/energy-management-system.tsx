import { createFileRoute } from '@tanstack/react-router';
import '../index.css';
export const Route = createFileRoute('/energy-management-system')({
	component: EnergyManagementSystem,
});

import React from 'react';

export default function EnergyManagementSystem() {
	return <div>EnergyManagementSystem</div>;
}
