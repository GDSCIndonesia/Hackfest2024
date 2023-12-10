export default function TimeLine() {
  return (
    <section className='timeline' id='timeline'>
        <h1>Timeline</h1>
        <p>This is a magical timeline that can make your heart beat faster.</p>
        <div className='startEndGrid'>
            <div className='startEndCol'>
                <div className='absolute w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 bottom-0'></div>
                <div className='startEndFrame'>
                    <h1>Start</h1>
                </div>
            </div>
            <div className='hidden sm:col-span-6 lg:col-span-4 w-full bg-red-500'></div>
            <div className='hidden lg:col-span-4 w-full bg-red-500'></div>
        </div>
        <div className='timeGrid'>
            <div className='timeCol '>
                <div className='absolute w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 top-0'></div>
                <div className='hidden sm:block sm:absolute w-[20px] h-[10px] bg-softDark right-0 top-1/2 -translate-y-1/2'></div>
                <div className='absolute sm:hidden w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 bottom-0'></div>
                <div className='timeFrame bg-softGrey'>
                    <div className='timeContent'>
                        <h1>Stage 1</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum tempora suscipit veritatis sequi voluptas omnis ducimus dicta culpa.</p>
                    </div>
                    <div className='dateBottom'>
                        <h1>Updating Shortly</h1>
                    </div>
                </div>
            </div>
            <div className='timeCol'>
                <div className='absolute sm:hidden w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 top-0'></div>
                <div className='hidden sm:block sm:absolute w-[20px] h-[10px] bg-softDark left-0 top-1/2 -translate-y-1/2'></div>
                <div className='hidden lg:block lg:absolute w-[20px] h-[10px] bg-softDark right-0 top-1/2 -translate-y-1/2'></div>
                <div className='absolute lg:hidden w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 bottom-0'></div>
                <div className='timeFrame bg-hackRed'>
                    <div className='timeContent'>
                        <h1>Stage 2</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum tempora suscipit veritatis sequi voluptas omnis ducimus dicta culpa.</p>
                    </div>
                    <div className='dateBottom'>
                        <h1>Updating Shortly</h1>
                    </div>
                </div>
            </div>
            <div className='timeCol '>
                <div className='hidden sm:block sm:absolute w-[20px] h-[10px] bg-softDark left-0 top-1/2 -translate-y-1/2'></div>
                <div className='absolute sm:hidden lg:absolute lg:block w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 bottom-0'></div>
                <div className='absolute lg:hidden w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 top-0'></div>
                <div className='timeFrame bg-hackYellow'>
                    <div className='timeContent'>
                        <h1>Stage 3</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum tempora suscipit veritatis sequi voluptas omnis ducimus dicta culpa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum tempora suscipit veritatis sequi voluptas omnis ducimus dicta culpa.</p>
                    </div>
                    <div className='dateBottom'>
                        <h1>Updating Shortly</h1>
                    </div>
                </div>
            </div>
            <div className='timeCol '>
                <div className='absolute sm:hidden w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 top-0'></div>
                <div className='absolute w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 bottom-0'></div>
                <div className='hidden lg:block lg:absolute w-[20px] h-[10px] bg-softDark right-0 top-1/2 -translate-y-1/2'></div>
                <div className='hidden sm:block sm:absolute lg:hidden w-[20px] h-[10px] bg-softDark left-0 top-1/2 -translate-y-1/2'></div>
                <div className='timeFrame bg-hackBlue'>
                    <div className='timeContent'>
                        <h1>Stage 6</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum tempora suscipit veritatis sequi voluptas omnis ducimus dicta culpa.</p>
                    </div>
                    <div className='dateBottom'>
                        <h1>Updating Shortly</h1>
                    </div>
                </div>
            </div>
            <div className='timeCol row-start-5 sm:row-start-3 lg:row-start-2 lg:col-start-5'>
                <div className='hidden lg:block lg:absolute w-[20px] h-[10px] bg-softDark left-0 top-1/2 -translate-y-1/2'></div>
                <div className='hidden sm:block sm:absolute w-[20px] h-[10px] bg-softDark right-0 top-1/2 -translate-y-1/2'></div>
                <div className='absolute lg:hidden w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 top-0'></div>
                <div className='absolute sm:hidden w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 bottom-0'></div>
                <div className='timeFrame bg-softGrey'>
                    <div className='timeContent'>
                        <h1>Stage 5</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum tempora suscipit veritatis sequi voluptas omnis ducimus dicta culpa.</p>
                    </div>
                    <div className='dateBottom'>
                        <h1>Updating Shortly</h1>
                    </div>
                </div>
            </div>
            <div className='timeCol row-start-4 sm:row-start-2 lg:col-start-9'>
                <div className='hidden lg:block lg:absolute w-[20px] h-[10px] bg-softDark left-0 top-1/2 -translate-y-1/2'></div>
                <div className='hidden sm:block sm:absolute lg:hidden w-[20px] h-[10px] bg-softDark right-0 top-1/2 -translate-y-1/2'></div>
                <div className='absolute sm:hidden lg:absolute lg:block w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 top-0'></div>
                <div className='absolute lg:hidden w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 bottom-0'></div>
                <div className='timeFrame bg-hackGreen'>
                    <div className='timeContent'>
                        <h1>Stage 4</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum tempora suscipit veritatis sequi voluptas omnis ducimus dicta culpa.</p>
                    </div>
                    <div className='dateBottom'>
                        <h1>Updating Shortly</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className='startEndGrid'>
            <div className='startEndCol sm:col-start-7 lg:col-start-1'>
                <div className='absolute w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 top-0'></div>
                <div className='startEndFrame'>
                    <h1>Finish</h1>
                </div>
            </div>
            <div className='hidden sm:col-span-6 lg:col-span-4 w-full bg-red-500'></div>
            <div className='hidden lg:col-span-4 w-full bg-red-500'></div>
        </div>
    </section>
  )
}
