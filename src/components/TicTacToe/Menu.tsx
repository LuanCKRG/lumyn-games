export const Menu = () => {
  return (
    <header>
      <h1 className="text-lg text-center">
        Partida 5142°
      </h1>

      <ul className="flex justify-between p-2">
        <li className="flex flex-col text-left">
          <span>Player 1 (X)</span>
          <span>3 Vitórias</span>
        </li>
        <li>
          -
        </li>
        <li className="flex flex-col text-right">
          <span>Player 2 (O)</span>
          <span>2 Vitórias</span>
        </li>
      </ul>
    </header>
  )
}