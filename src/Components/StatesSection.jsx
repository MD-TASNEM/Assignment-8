export default function StatesSection(){
  const items = [
    { title: 'Top Rated', desc: 'Highest rated apps', color: 'bg-yellow-100' },
    { title: 'Most Downloaded', desc: 'Popular among users', color: 'bg-blue-100' },
    { title: 'New & Fresh', desc: 'Recently added apps', color: 'bg-green-100' },
  ]
  return (
    <section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map(it=> (
        <div key={it.title} className={`${it.color} p-6 rounded-lg`}>
          <h3 className="font-semibold">{it.title}</h3>
          <p className="text-sm text-gray-700 mt-2">{it.desc}</p>
        </div>
      ))}
    </section>
  )
}