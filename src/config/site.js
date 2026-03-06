// Get site URL from environment variable, use default value if not set
// Note: Please set the correct PUBLIC_SITE_URL in .env file after first deployment
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://tylin-lab.nthu.edu.tw/';

export const siteConfig = {
	title: "TYLin Lab | 林姿瑩實驗室",
	author: "Prof. Tzu-Ying Lin",
	url: SITE_URL,
	mail: "tzuying.lin@mx.nthu.edu.tw",
	utm: {
		source: `${SITE_URL}`,
		medium: "referral",
		campaign: "navigation",
	},
	meta:{
		title: "TYLin Lab – Energy Materials & Thin-Film Photovoltaics",
		description: "TYLin Lab at National Tsing Hua University focuses on sustainable energy storage materials, CIGS thin-film solar cells, solid-state batteries, and advanced electrolyte systems.",
		keywords: "TYLin Lab, CIGS solar cells, lithium-ion battery, solid-state electrolyte, energy materials, NTHU, 林姿瑩",
		image: `${SITE_URL}/logo.png`,
		twitterHandle: "",
	},
	social:{
		email: "tzuying.lin@mx.nthu.edu.tw",
	},
};

// Footer - no social links needed for lab site


