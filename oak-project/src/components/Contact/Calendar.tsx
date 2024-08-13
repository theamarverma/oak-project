import { useState } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export function Calendar() {
	const [value, onChange] = useState<Value>(new Date());

	return (
		<div className="card max-w-sm rounded-xl min-h-[600px] bg-[#28292B] text-white">
			<div className="flex flex-col items-center  justify-center gap-4 p-10">
				<img
					className="w-20 rounded-full"
					src="https://avatars.hubspot.net/default-170"
					alt=""
				/>
				<h1 className="font-semibold text-xl">Meet with Nicholas Stewart</h1>
				<ReactCalendar
					className={
						'flex flex-col items-center justify-center gap-4 border border-white rounded-xl p-8 bg-[#4EACFE]'
					}
					showNavigation={true}
					onChange={onChange}
					value={value}
				/>
			</div>
		</div>
	);
}
