// image last but move up visually

export type PageTitleProps = {
  h1: string
  description: string
  image: string
  imageAlt: string
}

export default function PageTitle({ h1, description, image, imageAlt }: PageTitleProps) {
  const width = 1298

  return (
    <section className="page-title">
      <div className="page-title__header">
        <h1>{h1}</h1>
        <p>{description}</p>
      </div>
      <img className="page-title__image" src={image} alt={imageAlt} width={width} />
    </section>
  )
}
