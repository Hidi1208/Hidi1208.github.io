/** Site-wide constants and small helpers. */

export const SITE = {
  author: 'Aniruddha Deshmukh',
  authorShort: 'Ani',
  tagline: 'Embedded systems & hardware engineer',
  email: 'anidesh1208@gmail.com',
  github: 'https://github.com/Hidi1208',
  githubUser: 'Hidi1208',
  cv: '/cv.pdf',
  url: 'https://Hidi1208.github.io',
} as const;

/** Channel = project category. Labels come from the brief §2. */
export const CHANNELS = {
  CH1: 'Embedded Systems',
  CH2: 'PCB & Hardware Design',
  CH3: 'Control & Applied ML',
} as const;

export type Channel = keyof typeof CHANNELS;

/** Full GitHub URL for a repo slug under the author's account. */
export function repoUrl(slug: string): string {
  return `https://github.com/${SITE.githubUser}/${slug}`;
}
