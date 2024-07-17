import Link from 'next/link'
import Date from '@/components/Date'

import {getSortedPostsData} from '@/lib/posts'
import Image from "next/image";

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

// Change this url to change the image!
const imageUrl = '/images/';

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
      <div>
        <section>
          <p className={'prose'}>
            Wartotle
          </p>
          <div className={'my-4'}>
            <i>
              Check out the worturtle{' '}
                <Link href={'https://bulbapedia.bulbagarden.net/wiki/Wartortle_(Pok%C3%A9mon)'}>
                  <button className={'btn btn-primary'}>
                      <span className={'text-primary-content'}>
                        here
                      </span>
                  </button>
                </Link>
            </i>
          </div>
        </section>

        <div className={'my-4'}>
          <Image className={'rounded'} src={imageUrl} alt={'My Image'} width={500}
                 height={500}/>
        </div>

        <section className={'prose'}>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({id, date, title}) => (
                <li key={id}>
                  <div>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br/>
                    <small>
                      <Date dateString={date}/>
                    </small>
                  </div>
                </li>
            ))}
          </ul>
        </section>
      </div>
  )
}
