const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.B7BplqAN.js",app:"_app/immutable/entry/app.CvMxy4dg.js",imports:["_app/immutable/entry/start.B7BplqAN.js","_app/immutable/chunks/PxQ1eNY-.js","_app/immutable/chunks/B8r0xS45.js","_app/immutable/chunks/zo8DycLn.js","_app/immutable/entry/app.CvMxy4dg.js","_app/immutable/chunks/B8r0xS45.js","_app/immutable/chunks/DfIuZpbt.js","_app/immutable/chunks/6fmdAY9t.js","_app/immutable/chunks/zo8DycLn.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Dl8lFZtI.js')),
			__memo(() => import('./chunks/1-DXzBhbDj.js')),
			__memo(() => import('./chunks/2-BjtJKDfP.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
