// src/components/Pagination.js
import React from "react";

const Pagination = ({ total, page, limit, onPageChange }) => {
	const totalPages = Math.ceil(total / limit);
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div>
			{pages.map((p) => (
				<button
					key={p}
					onClick={() => onPageChange(p)}
					disabled={p === page}>
					{p}
				</button>
			))}
		</div>
	);
};

export default Pagination;
