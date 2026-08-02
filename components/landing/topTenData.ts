export type TopTenItem = {
  title: string
  posterUrl: string
  /** Still airing — surfaces the "weekly episodes" badge on the poster. */
  ongoing?: boolean
}

const POSTER = "https://image.tmdb.org/t/p/w500"

/**
 * Static Top 10, ordered by rank — edit this list to change the section.
 *
 * Every poster path below was taken from TMDB and verified to return 200 from
 * the CDN, so none of them are guesses. Two caveats worth knowing:
 *
 * 1. This is a hand-curated snapshot, NOT live Canadian watch data. Nothing
 *    refreshes it, so the "this week" framing goes stale until it is edited.
 *    The live alternative is TMDB's trending endpoint behind an API key.
 * 2. Poster art is studio-owned. Fine for editorially listing what is popular,
 *    but worth a look from whoever owns the legal side before launch.
 */
export const TOP_TEN: TopTenItem[] = [
  { title: "House of the Dragon", posterUrl: `${POSTER}/7V0Ebks0GgpKvQ7QbLAIdX5dos4.jpg`, ongoing: true },
  { title: "Reacher", posterUrl: `${POSTER}/f1VCQIG2iCyOookdgOzwtUpwWC0.jpg`, ongoing: true },
  { title: "Stranger Things", posterUrl: `${POSTER}/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg`, ongoing: true },
  { title: "Breaking Bad", posterUrl: `${POSTER}/anFx9aTOOYqgS3v7x3R84Kz67ly.jpg` },
  { title: "FROM", posterUrl: `${POSTER}/pRtJagIxpfODzzb0T0NAvZSzErC.jpg`, ongoing: true },
  { title: "The Mentalist", posterUrl: `${POSTER}/acYXu4KaDj1NIkMgObnhe4C4a0T.jpg` },
  { title: "Dexter", posterUrl: `${POSTER}/q8dWfc4JwQuv3HayIZeO84jAXED.jpg` },
  { title: "The Rookie", posterUrl: `${POSTER}/70kTz0OmjjZe7zHvIDrq2iKW7PJ.jpg`, ongoing: true },
  { title: "Friends", posterUrl: `${POSTER}/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg` },
  { title: "NCIS", posterUrl: `${POSTER}/mBcu8d6x6zB1el3MPNl7cZQEQ31.jpg`, ongoing: true },
]
