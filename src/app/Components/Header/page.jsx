"use client"

const Header = () => {

  return (
    <div className="flex justify-between px-10 py-2">
        <div>
            <h1  className=" cursor-pointer text-4xl font-semibold">Flim<span className="text-red-500">F</span>us<span className="text-yellow-500 ">i</span>on</h1>
        </div>
        <div>
            <ul className="flex gap-4 sm:2">
                <li className=" cursor-pointer hover:text-yellow-300">Bollywood</li>
                <li className=" cursor-pointer hover:text-yellow-300">Hollywood</li>
                <li className=" cursor-pointer hover:text-yellow-300">Web Series</li>
        
            </ul>
        </div>
    </div>
  )
}

export default Header