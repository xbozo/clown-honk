export const ArticleCard = () => {
  return (
    <div className='flex flex-col gap-3 rounded-lg border border-zinc-800 p-4'>
      <h3 className='text-xl font-bold'>Article card title</h3>

      <p className='line-clamp-2 break-words text-sm text-zinc-400 md:line-clamp-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        doloremque animi, quisquam nihil natus recusandae, dignissimos quia rem
        quaerat perferendis ad corrupti vitae maiores nam delectus placeat sint
        quis eos.
      </p>
    </div>
  )
}
