import { PageTitle } from '@/components/page-title'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { GridSmallBg } from '@/components/ui/grid-small-bg'
import clsx from 'clsx'
import { LucideBook } from 'lucide-react'
import { Metadata } from 'next'

const articles = [
  {
    title: 'Um artigo-doideira mesmo demais!',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    header: 'Cabeçalho do artigo 1',
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
  {
    title: 'Artigo 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    header: 'Cabeçalho do artigo 1',
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
  {
    title: 'Artigo 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    header: 'Cabeçalho do artigo 1',
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
  {
    title: 'Artigo 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    header: 'Cabeçalho do artigo 1',
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
  {
    title: 'Artigo 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    header: 'Cabeçalho do artigo 1',
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
  {
    title: 'Artigo 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    header: <GridSmallBg children={<div className='h-full'>Artigo 1</div>} />,
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
  {
    title: 'Artigo 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    header: <GridSmallBg children={<div className='h-full'>Artigo 1</div>} />,
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
  {
    title: 'Artigo 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    header: <GridSmallBg children={<div className='h-full'>Artigo 1</div>} />,
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
  {
    title: 'Artigo 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    header: <GridSmallBg children={<div className='h-full'>Artigo 1</div>} />,
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
  {
    title: 'Artigo 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    header: <GridSmallBg children={<div className='h-full'>Artigo 1</div>} />,
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
  {
    title: 'Artigo 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    header: <GridSmallBg children={<div className='h-full'>Artigo 1</div>} />,
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
]

export const metadata: Metadata = {
  title: 'Artigos',
}

const Articles = async () => {
  return (
    <>
      <PageTitle
        title='Artigos'
        icon={<LucideBook className='size-6 text-zinc-500' />}
      />

      <BentoGrid className='mx-auto max-w-4xl md:auto-rows-[20rem]'>
        {articles.map((article, index) => {
          return (
            <BentoGridItem
              key={index}
              title={article.title}
              description={article.description}
              header={article.header}
              className={clsx('md:col-span-1', {
                'md:col-span-2': index === 1 || index === 2 || index === 5,
              })}
              icon={article.icon}
            />
          )
        })}
      </BentoGrid>

      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 '>
        {/* {Array.from({ length: 20 }).map((_, i) => {
					return <ArticleCard key={i} />
				})} */}
      </div>
    </>
  )
}

export default Articles
