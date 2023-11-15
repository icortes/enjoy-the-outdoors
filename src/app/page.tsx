import Jumbotron from './(home)/Jumbotron';

export default function Home() {
  return (
    <>
      <Jumbotron />
      <main className='container-md mt-5'>
        <div className='row g-4'>
          <div className='col-sm-6'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='img-fluid img-thumbnail rounded-3 shadow-lg w-100'
              src='/assets/images/redwoods.jpg'
              alt='santa cruz mountain giant redwood trees'
            />
            <h3 className='mt-3'>Discover Your Perfect Park:</h3>
            <hr />
            <p>
              Embark on a personalized journey with SummitQuest and find the national park
              that speaks to your soul. Our intuitive search tools empower you to tailor
              your exploration based on your preferences and interests. Whether you crave
              serene lakes, awe-inspiring mountains, or vibrant meadows, we&apos;ve
              curated a selection of parks to match your unique desires.
            </p>
          </div>
          <div className='col-sm-6'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='img-fluid img-thumbnail rounded-3 shadow-lg w-100'
              src='/assets/images/waterfall.jpg'
              alt='santa cruz mountain waterfall'
            />
            <h3 className='mt-3'>Search by Your Preferences:</h3>
            <hr />
            <p>
              Use our advanced search features to filter national parks based on criteria
              such as scenery, activities, and difficulty level. Looking for a park with
              stunning waterfalls, family-friendly trails, or challenging backcountry
              adventures? Customize your search and uncover the hidden gems that align
              with your ideal outdoor experience.
            </p>
          </div>
          <div className='col-md-6'></div>
        </div>
      </main>
    </>
  );
}
