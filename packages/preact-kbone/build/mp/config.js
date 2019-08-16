module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/test/aaa",
	"router": {
		"index": [
			{
				"regexp": "^\\/test\\/aaa(?:\\/)?$",
				"options": "i"
			},
			{
				"regexp": "^\\/test\\/bbb(?:\\/)?$",
				"options": "i"
			}
		],
		"log": [
			{
				"regexp": "^\\/test\\/aaa(?:\\/)?$",
				"options": "i"
			},
			{
				"regexp": "^\\/test\\/bbb(?:\\/)?$",
				"options": "i"
			}
		]
	},
	"pages": {
		"index": {},
		"log": {}
	},
	"redirect": {
		"notFound": "index",
		"accessDenied": "index"
	},
	"optimization": {
		"domSubTreeLevel": 5,
		"elementMultiplexing": true,
		"textMultiplexing": true,
		"commentMultiplexing": true,
		"domExtendMultiplexing": true,
		"styleValueReduce": 5000,
		"attrValueReduce": 5000
	}
}