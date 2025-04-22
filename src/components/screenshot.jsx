import { clsx } from 'clsx'
import Image from 'next/image'

export function Screenshot({ width, height, src, className }) {
  return (
    <div
      style={{ '--width': width, '--height': height }}
      className={clsx(
        className,
        'relative aspect-[var(--width)/var(--height)] [--radius:var(--radius-xl)]',
      )}
    >
      <div className="absolute -inset-[var(--padding)] rounded-[calc(var(--radius)+var(--padding))] shadow-xs ring-1 ring-black/5 [--padding:--spacing(2)]" />

      <Image
        src={src}
        width={width}
        height={height}
        alt=""
        className="rounded-[var(--radius)] shadow-2xl ring-1 ring-black/10"
      />
    </div>
  )
}
