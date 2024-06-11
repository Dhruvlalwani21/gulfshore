import axios from "axios";

const fetchCityData = async (city) => {
	try {
		const response = await axios.get(
			`https://en.wikipedia.org/api/rest_v1/page/summary/${city}`
		);
		const data = response.data;
		return {
			name: data.title,
			description: data.extract,
			image: data.thumbnail
				? data.thumbnail.source
				: "https://via.placeholder.com/600x400",
			link: data.content_urls.desktop.page,
		};
	} catch (error) {
		console.error(`Error fetching data for ${city}:`, error);
		return {
			name: city,
			description: "No description available",
			image: "https://via.placeholder.com/600x400",
			link: `https://en.wikipedia.org/wiki/${city}`,
		};
	}
};

export default fetchCityData;
