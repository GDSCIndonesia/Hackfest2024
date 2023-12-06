import Countdown from 'react-countdown';

interface RendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountDown() {
  const renderer = ({ days, hours, minutes, seconds }: RendererProps) => (
    <div className='flex'>
      <div className='flex w-full'>
        <div className='countFrame rounded-l-[10px] md:rounded-l-[20px]'>
          <div className='countNumber'>{days}</div>
          <div className='countStatus'>Days</div>
        </div>
        <div className='countFrame'>
          <div className='countNumber'>{hours}</div>
          <div className='countStatus'>Hours</div>
        </div>
      </div>
      <div className='flex w-full'>
        <div className='countFrame'>
          <div className='countNumber'>{minutes}</div>
          <div className='countStatus'>Minutes</div>
        </div>
        <div className='countFrame border-r-2 rounded-r-[10px]  md:rounded-r-[20px]'>
          <div className='countNumber'>{seconds}</div>
          <div className='countStatus'>Seconds</div>
        </div>
      </div>
    </div>
  );

  const eventDate = new Date("2023-12-17T23:59:59");

  return (
    <section className='countdown'>
      <div className='countGrid'>
        <div className='countText'>
          <h1>Keep Up to Date</h1>
          <p>As a front-end developer, I find myself in a perpetual race against time. However, unlike the elements in my code, time refuses to be debugged or optimized. So, make sure you do not run out of time.</p>
        </div>
        <div className='countDate'>
          <div>
            <h1>Event Date</h1>
            <p>Don&#39;t worry, it&#39;s just shrinking bit by bit. Like my motivation during Monday mornings</p>
            <Countdown date={eventDate} renderer={renderer} />
          </div>
        </div>
      </div>
    </section>
  );
}
