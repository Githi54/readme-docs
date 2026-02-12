import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_BASk6Pbb.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BsG7sE0Q.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/admin/Documents/pet-projects/readme-docs/web/","cacheDir":"file:///Users/admin/Documents/pet-projects/readme-docs/web/node_modules/.astro/","outDir":"file:///Users/admin/Documents/pet-projects/readme-docs/web/dist/","srcDir":"file:///Users/admin/Documents/pet-projects/readme-docs/web/src/","publicDir":"file:///Users/admin/Documents/pet-projects/readme-docs/web/public/","buildClientDir":"file:///Users/admin/Documents/pet-projects/readme-docs/web/dist/client/","buildServerDir":"file:///Users/admin/Documents/pet-projects/readme-docs/web/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"generate/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/generate","isIndex":false,"type":"page","pattern":"^\\/generate\\/?$","segments":[[{"content":"generate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/generate.astro","pathname":"/generate","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/download","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/download\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"download","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/download.ts","pathname":"/api/download","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/validate","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/validate\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"validate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/validate.ts","pathname":"/api/validate","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/generate.BTkABvbz.css"}],"routeData":{"route":"/docs/[owner]/[repo]/[section]","isIndex":false,"type":"page","pattern":"^\\/docs\\/([^/]+?)\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"owner","dynamic":true,"spread":false}],[{"content":"repo","dynamic":true,"spread":false}],[{"content":"section","dynamic":true,"spread":false}]],"params":["owner","repo","section"],"component":"src/pages/docs/[owner]/[repo]/[section].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/[owner]/[repo]","isIndex":true,"type":"page","pattern":"^\\/docs\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"owner","dynamic":true,"spread":false}],[{"content":"repo","dynamic":true,"spread":false}]],"params":["owner","repo"],"component":"src/pages/docs/[owner]/[repo]/index.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/generate.BTkABvbz.css"}],"routeData":{"route":"/guide","isIndex":false,"type":"page","pattern":"^\\/guide\\/?$","segments":[[{"content":"guide","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/guide.astro","pathname":"/guide","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/admin/Documents/pet-projects/readme-docs/web/src/pages/docs/[owner]/[repo]/[section].astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/pet-projects/readme-docs/web/src/pages/generate.astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/pet-projects/readme-docs/web/src/pages/guide.astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/pet-projects/readme-docs/web/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/download@_@ts":"pages/api/download.astro.mjs","\u0000@astro-page:src/pages/api/validate@_@ts":"pages/api/validate.astro.mjs","\u0000@astro-page:src/pages/docs/[owner]/[repo]/[section]@_@astro":"pages/docs/_owner_/_repo_/_section_.astro.mjs","\u0000@astro-page:src/pages/docs/[owner]/[repo]/index@_@astro":"pages/docs/_owner_/_repo_.astro.mjs","\u0000@astro-page:src/pages/generate@_@astro":"pages/generate.astro.mjs","\u0000@astro-page:src/pages/guide@_@astro":"pages/guide.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:../node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BL8FcZCA.mjs","/Users/admin/Documents/pet-projects/readme-docs/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BVuhZ6dS.mjs","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/c4Diagram-YG6GDRKO.mjs":"_astro/c4Diagram-YG6GDRKO.Bww1Dqe6.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/flowDiagram-NV44I4VS.mjs":"_astro/flowDiagram-NV44I4VS.KAxFplEa.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/erDiagram-Q2GNP2WA.mjs":"_astro/erDiagram-Q2GNP2WA.CfMAkHXR.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/gitGraphDiagram-NY62KEGX.mjs":"_astro/gitGraphDiagram-NY62KEGX.Df9sEZKR.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-WHAUD3N6.mjs":"_astro/infoDiagram-WHAUD3N6.CLh_Es1v.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/quadrantDiagram-AYHSOK5B.mjs":"_astro/quadrantDiagram-AYHSOK5B.CbGZUpJy.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/requirementDiagram-UZGBJVZJ.mjs":"_astro/requirementDiagram-UZGBJVZJ.CXic6Fxi.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/sequenceDiagram-WL72ISMW.mjs":"_astro/sequenceDiagram-WL72ISMW.Dkm7hERc.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/classDiagram-2ON5EDUG.mjs":"_astro/classDiagram-2ON5EDUG.CEqtDjyo.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/classDiagram-v2-WZHVMYZB.mjs":"_astro/classDiagram-v2-WZHVMYZB.CEqtDjyo.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/stateDiagram-FKZM4ZOC.mjs":"_astro/stateDiagram-FKZM4ZOC.Zk7jeDs9.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/stateDiagram-v2-4FDKWEC3.mjs":"_astro/stateDiagram-v2-4FDKWEC3.CYyIZIRF.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/journeyDiagram-XKPGCS4Q.mjs":"_astro/journeyDiagram-XKPGCS4Q.uAmRc9sh.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/timeline-definition-IT6M3QCI.mjs":"_astro/timeline-definition-IT6M3QCI.BcO6VbWi.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/kanban-definition-3W4ZIXB7.mjs":"_astro/kanban-definition-3W4ZIXB7.CKqd7-Qb.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/diagram-S2PKOQOG.mjs":"_astro/diagram-S2PKOQOG.D84MIWaM.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/diagram-QEK2KX5R.mjs":"_astro/diagram-QEK2KX5R.B5lLHjZO.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/blockDiagram-VD42YOAC.mjs":"_astro/blockDiagram-VD42YOAC.AQlz7B6Y.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/katex/dist/katex.mjs":"_astro/katex.DhXJpUyf.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/dagre-6UL2VRFP.mjs":"_astro/dagre-6UL2VRFP.BlOvIv6m.js","/Users/admin/Documents/pet-projects/readme-docs/web/src/components/generate/RepoGenerator.astro?astro&type=script&index=0&lang.ts":"_astro/RepoGenerator.astro_astro_type_script_index_0_lang.QBhxZLyb.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.D-sLU106.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/xychartDiagram-PRI3JC2R.mjs":"_astro/xychartDiagram-PRI3JC2R.D00LNlUk.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/pieDiagram-ADFJNKIX.mjs":"_astro/pieDiagram-ADFJNKIX.Bmdtlhgz.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/mindmap-definition-VGOIOE7T.mjs":"_astro/mindmap-definition-VGOIOE7T.291uVhMm.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/architectureDiagram-VXUJARFQ.mjs":"_astro/architectureDiagram-VXUJARFQ.MvzooKAw.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/cose-bilkent-S5V4N54A.mjs":"_astro/cose-bilkent-S5V4N54A.CwPk6p10.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/sankeyDiagram-TZEHDZUN.mjs":"_astro/sankeyDiagram-TZEHDZUN.22eW0ps_.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/diagram-PSM6KHXK.mjs":"_astro/diagram-PSM6KHXK.c8zxt0lX.js","/Users/admin/Documents/pet-projects/readme-docs/node_modules/mermaid/dist/chunks/mermaid.core/ganttDiagram-JELNMOA3.mjs":"_astro/ganttDiagram-JELNMOA3.UuIg--Jl.js","/Users/admin/Documents/pet-projects/readme-docs/web/src/layouts/EnhancedDocsLayout.astro?astro&type=script&index=0&lang.ts":"_astro/EnhancedDocsLayout.astro_astro_type_script_index_0_lang.BbZEv67Y.js","@astrojs/preact/client.js":"_astro/client.MhdSn6wP.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/generate.BTkABvbz.css","/favicon.ico","/favicon.svg","/_astro/EnhancedDocsLayout.astro_astro_type_script_index_0_lang.BbZEv67Y.js","/_astro/RepoGenerator.astro_astro_type_script_index_0_lang.QBhxZLyb.js","/_astro/_baseUniq.CfocS8v9.js","/_astro/arc.BK5F9yga.js","/_astro/architectureDiagram-VXUJARFQ.MvzooKAw.js","/_astro/blockDiagram-VD42YOAC.AQlz7B6Y.js","/_astro/c4Diagram-YG6GDRKO.Bww1Dqe6.js","/_astro/channel.C0eTh_lT.js","/_astro/chunk-4BX2VUAB.BsSSCEKv.js","/_astro/chunk-55IACEB6.CK2LFGu6.js","/_astro/chunk-B4BG7PRW.GBknTgUM.js","/_astro/chunk-DI55MBZ5.DOcDCQi_.js","/_astro/chunk-FMBD7UC4.DIlnDwF2.js","/_astro/chunk-QN33PNHL.BNyWr3Un.js","/_astro/chunk-QZHKN3VN.Do0u9O6G.js","/_astro/chunk-TZMSLE5B.BE_mR3Cr.js","/_astro/classDiagram-2ON5EDUG.CEqtDjyo.js","/_astro/classDiagram-v2-WZHVMYZB.CEqtDjyo.js","/_astro/client.D7t3SDJB.js","/_astro/client.MhdSn6wP.js","/_astro/clone.N1bMOUqx.js","/_astro/cose-bilkent-S5V4N54A.CwPk6p10.js","/_astro/cytoscape.esm.DtBltrT8.js","/_astro/dagre-6UL2VRFP.BlOvIv6m.js","/_astro/defaultLocale.DX6XiGOO.js","/_astro/diagram-PSM6KHXK.c8zxt0lX.js","/_astro/diagram-QEK2KX5R.B5lLHjZO.js","/_astro/diagram-S2PKOQOG.D84MIWaM.js","/_astro/erDiagram-Q2GNP2WA.CfMAkHXR.js","/_astro/flowDiagram-NV44I4VS.KAxFplEa.js","/_astro/ganttDiagram-JELNMOA3.UuIg--Jl.js","/_astro/gitGraphDiagram-NY62KEGX.Df9sEZKR.js","/_astro/graph.BXzFpGE1.js","/_astro/infoDiagram-WHAUD3N6.CLh_Es1v.js","/_astro/init.Gi6I4Gst.js","/_astro/journeyDiagram-XKPGCS4Q.uAmRc9sh.js","/_astro/kanban-definition-3W4ZIXB7.CKqd7-Qb.js","/_astro/katex.DhXJpUyf.js","/_astro/layout.ByPqhcE1.js","/_astro/linear.CYeUeVbe.js","/_astro/min.14An0WBz.js","/_astro/mindmap-definition-VGOIOE7T.291uVhMm.js","/_astro/ordinal.BYWQX77i.js","/_astro/pieDiagram-ADFJNKIX.Bmdtlhgz.js","/_astro/preload-helper.BlTxHScW.js","/_astro/quadrantDiagram-AYHSOK5B.CbGZUpJy.js","/_astro/requirementDiagram-UZGBJVZJ.CXic6Fxi.js","/_astro/sankeyDiagram-TZEHDZUN.22eW0ps_.js","/_astro/sequenceDiagram-WL72ISMW.Dkm7hERc.js","/_astro/signals.module.D-sLU106.js","/_astro/stateDiagram-FKZM4ZOC.Zk7jeDs9.js","/_astro/stateDiagram-v2-4FDKWEC3.CYyIZIRF.js","/_astro/timeline-definition-IT6M3QCI.BcO6VbWi.js","/_astro/treemap-KMMF4GRG.DOkuyteO.js","/_astro/xychartDiagram-PRI3JC2R.D00LNlUk.js","/generate/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"mkdxr5nHUyWMOxI9IBYxBq5jO6lRINYbtHWds1BwY28="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
