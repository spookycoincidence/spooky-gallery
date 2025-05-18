import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const photos = [
    '/photos/photos/juaco.png',
    '/photos/photos/photo20.png',
    '/photos/photos/photo21.png',
    '/photos/photos/photo28.png',
    '/photos/photos/photo39.png',
    '/photos/photos/jua2.png',
    '/photos/photos/photo1.png',
    '/photos/photos/photo15.png',
    '/photos/photos/photo17.png',
    '/photos/photos/photo19.png',
    '/photos/photos/photo16.png',
    '/photos/photos/photo22.png',
    '/photos/photos/photo24.png',
    '/photos/photos/photo25.png',
    '/photos/photos/photo26.png',
    '/photos/photos/photo2.png',
    '/photos/photos/photo3.png',
    '/photos/photos/photo6.png',
    '/photos/photos/photo1.png',
    '/photos/photos/photo12.png',
    '/photos/photos/photo27.png',
    '/photos/photos/photo29.png',
    '/photos/photos/photo30.png',
    '/photos/photos/photo31.png',
    '/photos/photos/photo43.png',
    '/photos/photos/photo44.png',
    '/photos/photos/photo32.png',
    '/photos/photos/photo33.png',
    '/photos/photos/photo45.png',
    '/photos/photos/photo46.png',
    '/photos/photos/photo13.png',
    '/photos/photos/photo34.png',
    '/photos/photos/photo35.png',
    '/photos/photos/photo36.png',
    '/photos/photos/photo37.png',
    '/photos/photos/photo38.png',
    '/photos/photos/photo40.png',
    '/photos/photos/photo41.png',
    '/photos/photos/photo42.png',
    '/photos/photos/photo47.png',
    // agregá o saca fotos de la carpeta photos
  ]

  return (
    <main className={styles.main}>
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12 text-white font-serif tracking-wide">
        Photography Portfolio: <span className="italic">Spooky Collection</span>
      </h1>
      <div className={styles.grid}>
        {photos.map((src, idx) => (
          <div key={idx} className={styles.card}>
            <Image
              src={src}
              alt={`Foto ${idx + 1}`}
              width={400}
              height={600}
              style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
        ))}
      </div>
    </main>
  )
}


