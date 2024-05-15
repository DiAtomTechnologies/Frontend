
export default function VideoBG() {
  return (
    <video
      autoPlay
      loop
      muted
      className="w-full h-full object-cover absolute -z-40"
    >
      <source src="/bg/background2.mp4" type="video/mp4" />
    </video>

  )
}
