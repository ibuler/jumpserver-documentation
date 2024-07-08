import Image from 'next/image'
import { InfiniteMovingCards } from "@/components/home"
import { ImageComponent } from "@/components/public"
import exp from "constants"

function WhatsJumpServer() {
  return (
    <>
      <section className="text-center flex flex-col container items-center conf-block max-w-3xl">
        <h2>What's is JumpServer?</h2>
        <p>
          JumpServer is an open-source Privileged Access Management (PAM) tool 
          that provides DevOps and IT teams with on-demand and secure access to 
          SSH, RDP, K8s, Remote Apps and Database endpoints through a web browser.
        </p>
      </section>
      <ImageComponent src="/images/jumpserver-overview.png" alt="jumpserver-overview" width={800} height={600}/>
      <InfiniteMovingCards 
        direction="right"
        speed="normal"
        className="mx-auto [&_pre]:h-[calc(100%-48px)] [&_div.nextra-code]:h-full"
      >
        <ImageComponent src="/images/home/audits.png" alt="Audits" />
        <ImageComponent src="/images/home/rdp.png" alt="RDP" />
        <ImageComponent src="/images/home/assets.png" alt="Asset" />
        <ImageComponent src="/images/home/ssh.png" alt="SSH" />
      </InfiniteMovingCards>
    </>
  )
}

export default WhatsJumpServer
