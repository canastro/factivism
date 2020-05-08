import facts from '../../data';

const DEFAULT_FACT = { title: '', chartURL: '', relatedArticles: [], quotes: [] };
const lookup = new Map();
facts.forEach((fact) => {
  lookup.set(fact.slug, JSON.stringify(Object.assign({}, DEFAULT_FACT, fact)));
});

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  if (lookup.has(slug)) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
