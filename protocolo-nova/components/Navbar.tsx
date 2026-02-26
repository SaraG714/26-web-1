import Link from "next/link"
import BatteryIndicator from "./BatteryIndicator"

export const Navbar = () => {
  return (
    <div className="flex justify-between bg-black p-5 text-emerald-500">

      <Link href="/" className="text-2xl font-bold"> Protocolo Nova </Link>

      <div className="flex gap-5 text-2xl font-bold underline items-center">
        <Link href="/tripulacion"> Tripulación </Link>
        <Link href="/monitoreo"> Monitoreo </Link>
        <Link href="/especies"> Especies </Link>
        <BatteryIndicator />
      </div>

    </div>
  )
}
