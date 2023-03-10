import type { Site } from '$lib/types/site';
import type { Giscus } from '$lib/types/giscus';
import type { DD } from '$lib/types/dd';

import Avatar from '$assets/avatar.png';
import Avatar_128 from '$assets/avatar.png?w=128&h=128&format=avif;webp&imagetools';
import Avatar_48_PNG from '$assets/avatar.png?w=48&h=48&imagetools';
import Avatar_96_PNG from '$assets/avatar.png?w=96&h=96&imagetools';
import Avatar_192_PNG from '$assets/avatar.png?w=192&h=192&imagetools';
import Avatar_512_PNG from '$assets/avatar.png?w=512&h=512&imagetools';

import SiteCover from '$assets/qwer.webp';

export const siteConfig: Site.Config = {
  url: 'https://aihipuniversity.com',
  title: 'AiHiPUniversity',
  subtitle: '🚀 AiHiPUniversity- Built using Svelte with ❤',
  description: '🚀 AiHiPUniversity- Artificial Inteligence and Human Intelligence Programming University ❤',
  lang: 'en',
  timeZone: 'Africa/Accra',
  since: 2022,
  cover: SiteCover,
  author: {
    name: 'Solomon Foskaay',
    status: '🚀',
    statusTip:
      '<a href="https://github.com/SolomonFoskaay" rel="external" style="color:#0F0" onMouseOver="this.style.color=\'#0FF\'" onMouseOut="this.style.color=\'#0F0\'" target="_blank" rel="noreferrer">SolomonFoskaay</a> is an Entrepreneur, Ai/Web3 Dev Instructor, Technical Content Writer and Founder AiHiPUniversity!',
    avatar: Avatar,
    avatar_128: Avatar_128,
    avatar_48_png: Avatar_48_PNG,
    avatar_96_png: Avatar_96_PNG,
    avatar_192_png: Avatar_192_PNG,
    avatar_512_png: Avatar_512_PNG,
    website: 'https://github.com/SolomonFoskaay',
    github: 'https://github.com/SolomonFoskaay',
    email: 'hello@AiHiPUniversity.com',
    bio: `You Don't Know How Far You Can Go <br/> Until You Train and Spread Your Inner YOU Wings To Fly`,
  },
};

export const headConfig: Site.Head = {
  // Used for IndieWeb
  me: ['https://github.com/SolomonFoskaay'],
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment

          // Replace the following with your own setting

          // Plausible
          
          // Google tag (gtag.js)
          
    

          `<script async src="https://www.googletagmanager.com/gtag/js?id=G-244ZKLLQMH"></script>`,
          `<script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-244ZKLLQMH');
          </script>`,
        ],
};

export const dateConfig: Site.DateConfig = {
  toPublishedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
  toUpdatedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
};

// Replace with your own Giscus setting
// See https://giscus.app/
export const giscusConfig: Giscus.Config = {
  enable: true,
  id: 'giscus-comment',
  repo: import.meta.env.QWER_GISCUS_REPO,
  repoId: import.meta.env.QWER_GISCUS_REPO_ID,
  category: import.meta.env.QWER_GISCUS_CATEGORY,
  categoryId: import.meta.env.QWER_GISCUS_CATEGORY_ID,
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  loading: 'lazy',
  lang: 'en',
  'data-strict': '0',
};

export const navConfig: (DD.Nav | DD.Link)[] = [
  {
    name: '🎉About',
    url: '/about',
  },
  {
    name: '📄Contact',
    url: '/contact',
  },
  {
    name: '📚Courses',
    url: '/?tags-0.00.-Courses-Category=All-Courses',
  },
  {
    name: '🚀Foskaay AI Dev Support',
    url: 'https://foskaay.aihipuniversity.com',
  },
  {
    name: '✨Blog',
    url: '/?tags-1.0.-All-Blog-Category=Blog',
  }, 
];

export const mobilenavConfig: DD.Nav = {
  orientation: 2,
  links: [
    {
      name: '🎉About',
      url: '/about',
    },
    {
      name: '📄Contact',
      url: '/contact',
    },
    {
      name: '📚Courses',
      url: '/?tags-0.00.-Courses-Category=All-Courses',
    },
    {
      name: '🚀Foskaay AI Dev Support',
      url: 'https://foskaay.aihipuniversity.com',
    },
    {
      name: '✨Blog',
      url: '/?tags-1.0.-All-Blog-Category=Blog',
    },
  ],
};
