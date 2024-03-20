import { PageTitle } from '@/components/page-title'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { GridSmallBg } from '@/components/ui/grid-small-bg'
import { LucideBook } from 'lucide-react'

const items = [
  {
    title: 'Um artigo-doideira mesmo demais!',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    header: 'Cabeçalho do artigo 1',
    className: 'md:col-span-1',
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
  {
    title: 'Artigo 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    header: 'Cabeçalho do artigo 1',
    className: 'md:col-span-2',
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
  {
    title: 'Artigo 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    header: 'Cabeçalho do artigo 1',
    className: 'md:col-span-2',
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
  {
    title: 'Artigo 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    header: 'Cabeçalho do artigo 1',
    className: 'md:col-span-1',
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
  {
    title: 'Artigo 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    className: 'md:col-span-1',
    header: 'Cabeçalho do artigo 1',
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
  {
    title: 'Artigo 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis amet quam. Voluptas vel corporis, voluptates hic tenetur enim nam minus ipsa cupiditate officiis reprehenderit in perferendis et possimus ut.',
    header: <GridSmallBg children={<div className='h-full'>Artigo 1</div>} />,
    className: 'md:col-span-2',
    icon: <LucideBook className='size-4 text-zinc-500' />,
  },
]

const Articles = async () => {
  return (
    <>
      <PageTitle
        title='Artigos'
        icon={<LucideBook className='size-6 text-zinc-500' />}
      />

      <BentoGrid className='mx-auto max-w-4xl md:auto-rows-[20rem]'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
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
