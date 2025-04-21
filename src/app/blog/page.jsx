import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/16/solid'
import { clsx } from 'clsx'

export const metadata = {
  title: 'Blog',
  description:
    'Stay updated with CallGauge news, product tips, and insights to grow your business with smarter call tracking.',
}

const postsPerPage = 5

// Call tracking-specific categories
export const categories = [
  { slug: 'call-tracking-features', title: 'Call Tracking Features' },
  { slug: 'call-analytics-insights', title: 'Call Analytics Insights' },
  { slug: 'callgauge-updates', title: 'CallGauge Updates' },
]

// Lorem Ipsum content for reuse
const loremIpsum = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
  Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.
`

// Hardcoded data with updated authors and images
export const featuredPosts = [
  {
    slug: 'new-call-routing-system',
    title: 'Introducing Our New Call Routing System',
    excerpt: 'Enhance your call management with our latest routing system.',
    publishedAt: '2025-03-15T10:00:00Z',
    mainImage: '/screenshots/coming-soon.png',
    author: {
      name: 'Celeste Vandermark',
      image: '/team/celeste-vandermark.jpg',
    },
    category: 'call-tracking-features',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ text: 'Benefits of Advanced Routing' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum + loremIpsum }],
      },
    ],
  },
  {
    slug: 'deep-dive-call-analytics',
    title: 'A Deep Dive into Call Analytics',
    excerpt: 'Unlock actionable insights with CallGauge analytics.',
    publishedAt: '2025-02-20T14:00:00Z',
    mainImage: '/screenshots/coming-soon.png',
    author: { name: 'Nolan Sheffield', image: '/team/nolan-sheffield.jpg' },
    category: 'call-analytics-insights',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum + loremIpsum }],
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [{ text: 'Analytics drive smarter decisions.' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum }],
      },
    ],
  },
  {
    slug: 'callgauge-spring-update',
    title: 'CallGauge Spring 2025 Update',
    excerpt: 'New features and improvements in our latest release.',
    publishedAt: '2025-01-10T09:00:00Z',
    mainImage: '/screenshots/coming-soon.png',
    author: { name: 'Courtney Henry', image: '/team/courtney-henry.jpg' },
    category: 'callgauge-updates',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ text: 'What’s New' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum + loremIpsum }],
      },
    ],
  },
]

export const allPosts = [
  ...featuredPosts,
  {
    slug: 'dynamic-number-insertion-guide',
    title: 'Guide to Dynamic Number Insertion',
    excerpt: 'How to track calls with dynamic numbers.',
    publishedAt: '2024-12-05T11:00:00Z',
    mainImage: '/screenshots/coming-soon.png',
    author: { name: 'Dries Vincent', image: '/team/dries-vincent.jpg' },
    category: 'call-tracking-features',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum + loremIpsum }],
      },
      {
        _type: 'list',
        style: 'bullet',
        items: [
          { children: [{ text: 'Step 1: Setup' }] },
          { children: [{ text: 'Step 2: Track' }] },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum }],
      },
    ],
  },
  {
    slug: 'analyzing-call-duration',
    title: 'Analyzing Call Duration for Better Insights',
    excerpt: 'Learn what call duration tells you about your customers.',
    publishedAt: '2024-11-18T13:00:00Z',
    mainImage: '/screenshots/coming-soon.png',
    author: {
      name: 'Celeste Vandermark',
      image: '/team/celeste-vandermark.jpg',
    },
    category: 'call-analytics-insights',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum }],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ text: 'Key Metrics' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum + loremIpsum }],
      },
    ],
  },
  {
    slug: 'callgauge-year-in-review-2024',
    title: 'CallGauge: 2024 Year in Review',
    excerpt: 'Reflecting on a year of call tracking innovation.',
    publishedAt: '2024-11-01T10:00:00Z',
    mainImage: '/screenshots/coming-soon.png',
    author: { name: 'Nolan Sheffield', image: '/team/nolan-sheffield.jpg' },
    category: 'callgauge-updates',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum + loremIpsum }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ text: 'Milestones' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum }],
      },
    ],
  },
  {
    slug: 'call-source-tracking',
    title: 'Tracking Call Sources Effectively',
    excerpt: 'Identify where your calls are coming from.',
    publishedAt: '2024-10-15T09:00:00Z',
    mainImage: '/screenshots/coming-soon.png',
    author: { name: 'Courtney Henry', image: '/team/courtney-henry.jpg' },
    category: 'call-tracking-features',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum + loremIpsum }],
      },
    ],
  },
  {
    slug: 'call-conversion-metrics',
    title: 'Understanding Call Conversion Metrics',
    excerpt: 'Measure conversions from your calls accurately.',
    publishedAt: '2024-10-01T12:00:00Z',
    mainImage: '/screenshots/coming-soon.png',
    author: { name: 'Dries Vincent', image: '/team/dries-vincent.jpg' },
    category: 'call-analytics-insights',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum + loremIpsum }],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ text: 'How to Measure' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum }],
      },
    ],
  },
  {
    slug: 'callgauge-new-hires',
    title: 'Welcoming New Hires to CallGauge',
    excerpt: 'Meet our latest team members enhancing call tracking.',
    publishedAt: '2024-09-20T10:00:00Z',
    mainImage: '/screenshots/coming-soon.png',
    author: {
      name: 'Celeste Vandermark',
      image: '/team/celeste-vandermark.jpg',
    },
    category: 'callgauge-updates',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum + loremIpsum }],
      },
    ],
  },
  {
    slug: 'call-tracking-roi-tips',
    title: 'Tips to Boost ROI with Call Tracking',
    excerpt: 'Maximize your return on investment with these strategies.',
    publishedAt: '2024-09-10T11:00:00Z',
    mainImage: '/screenshots/coming-soon.png',
    author: { name: 'Nolan Sheffield', image: '/team/nolan-sheffield.jpg' },
    category: 'call-analytics-insights',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum + loremIpsum }],
      },
      {
        _type: 'list',
        style: 'bullet',
        items: [
          { children: [{ text: 'Tip 1' }] },
          { children: [{ text: 'Tip 2' }] },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum }],
      },
    ],
  },
  {
    slug: 'call-recording-benefits',
    title: 'Benefits of Call Recording in CallGauge',
    excerpt: 'How call recording improves your business.',
    publishedAt: '2024-08-25T09:00:00Z',
    mainImage: '/screenshots/coming-soon.png',
    author: { name: 'Courtney Henry', image: '/team/courtney-henry.jpg' },
    category: 'call-tracking-features',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ text: 'Why Record Calls' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum + loremIpsum }],
      },
    ],
  },
  {
    slug: 'callgauge-summer-update',
    title: 'CallGauge Summer 2024 Update',
    excerpt: 'Latest enhancements to our call tracking platform.',
    publishedAt: '2024-08-10T10:00:00Z',
    mainImage: '/screenshots/coming-soon.png',
    author: {
      name: 'Celeste Vandermark',
      image: '/team/celeste-vandermark.jpg',
    },
    category: 'callgauge-updates',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum + loremIpsum }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: loremIpsum }],
      },
    ],
  },
]

function FeaturedPosts() {
  if (featuredPosts.length === 0) return null

  return (
    <div className="mt-16 bg-linear-to-t from-gray-100 pb-14">
      <Container>
        <h2 className="text-2xl font-medium tracking-tight">Featured</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <div
              key={post.slug}
              className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md ring-1 shadow-black/5 ring-black/5"
            >
              {post.mainImage && (
                <img
                  alt={post.title}
                  src={post.mainImage}
                  className="aspect-3/2 w-full rounded-2xl object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-8">
                <div className="text-sm/5 text-gray-700">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
                <div className="mt-2 text-base/7 font-medium">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </div>
                <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                  {post.excerpt}
                </div>
                {post.author && (
                  <div className="mt-6 flex items-center gap-3">
                    {post.author.image && (
                      <img
                        alt={post.author.name}
                        src={post.author.image}
                        className="aspect-square size-6 rounded-full object-cover"
                      />
                    )}
                    <div className="text-sm/5 text-gray-700">
                      {post.author.name}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function Categories({ selected }) {
  if (categories.length === 0) return null

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <Menu>
        <MenuButton className="flex items-center justify-between gap-2 font-medium">
          {categories.find(({ slug }) => slug === selected)?.title ||
            'All categories'}
          <ChevronUpDownIcon className="size-4 fill-gray-900" />
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          className="min-w-40 rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
        >
          <MenuItem>
            <Link
              href="/blog"
              data-selected={selected === undefined ? true : undefined}
              className="group grid grid-cols-[1rem_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-950/5"
            >
              <CheckIcon className="hidden size-4 group-data-selected:block" />
              <p className="col-start-2 text-sm/6">All categories</p>
            </Link>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.slug}>
              <Link
                href={`/blog?category=${category.slug}`}
                data-selected={category.slug === selected ? true : undefined}
                className="group grid grid-cols-[16px_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-950/5"
              >
                <CheckIcon className="hidden size-4 group-data-selected:block" />
                <p className="col-start-2 text-sm/6">{category.title}</p>
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  )
}

function Posts({ page, category }) {
  let filteredPosts = category
    ? allPosts.filter((post) => post.category === category)
    : allPosts
  let start = (page - 1) * postsPerPage
  let end = page * postsPerPage
  let posts = filteredPosts.slice(start, end)

  if (posts.length === 0) {
    return (
      <p className="mt-6 text-gray-500">
        No posts found for this {category ? 'category' : 'page'}.
      </p>
    )
  }

  return (
    <div className="mt-6">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3"
        >
          <div>
            <div className="text-sm/5 max-sm:text-gray-700 sm:font-medium">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
            {post.author && (
              <div className="mt-2.5 flex items-center gap-3">
                {post.author.image && (
                  <img
                    alt={post.author.name}
                    src={post.author.image}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                )}
                <div className="text-sm/5 text-gray-700">
                  {post.author.name}
                </div>
              </div>
            )}
          </div>
          <div className="sm:col-span-2 sm:max-w-2xl">
            <h2 className="text-sm/5 font-medium">{post.title}</h2>
            <p className="mt-3 text-sm/6 text-gray-500">{post.excerpt}</p>
            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-1 text-sm/5 font-medium"
              >
                <span className="absolute inset-0" />
                Read more
                <ChevronRightIcon className="size-4 fill-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function Pagination({ page, category }) {
  let totalPosts = category
    ? allPosts.filter((post) => post.category === category).length
    : allPosts.length
  let hasPreviousPage = page > 1
  let previousPageUrl = hasPreviousPage ? url(page - 1, category) : undefined
  let hasNextPage = page * postsPerPage < totalPosts
  let nextPageUrl = hasNextPage ? url(page + 1, category) : undefined
  let pageCount = Math.ceil(totalPosts / postsPerPage)

  function url(pageNum, cat) {
    let params = new URLSearchParams()
    if (cat) params.set('category', cat)
    if (pageNum > 1) params.set('page', pageNum.toString())
    return params.size !== 0 ? `/blog?${params.toString()}` : '/blog'
  }

  if (pageCount < 2) return null

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Button
        variant="outline"
        href={previousPageUrl}
        disabled={!previousPageUrl}
      >
        <ChevronLeftIcon className="size-4" />
        Previous
      </Button>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1, category)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              'size-7 rounded-lg text-center text-sm/7 font-medium',
              'data-hover:bg-gray-100',
              'data-active:shadow-sm data-active:ring-1 data-active:ring-black/10',
              'data-active:data-hover:bg-gray-50',
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Button variant="outline" href={nextPageUrl} disabled={!nextPageUrl}>
        Next
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  )
}

export default function Blog({ searchParams }) {
  let page =
    'page' in searchParams && typeof searchParams.page === 'string'
      ? Math.max(1, parseInt(searchParams.page))
      : 1

  let category =
    typeof searchParams.category === 'string'
      ? categories.find((cat) => cat.slug === searchParams.category)
        ? searchParams.category
        : undefined
      : undefined

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">Blog</Subheading>
        <Heading as="h1" className="mt-2">
          What’s New at CallGauge
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Stay updated with CallGauge news, product tips, and insights to grow
          your business with smarter call tracking.
        </Lead>
      </Container>
      {page === 1 && !category && <FeaturedPosts />}
      <Container className="mt-16 pb-24">
        <Categories selected={category} />
        <Posts page={page} category={category} />
        <Pagination page={page} category={category} />
      </Container>
      <Footer />
    </main>
  )
}
