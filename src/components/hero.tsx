import Image from "next/image";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="relative h-auto w-full bg-gray-100">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4 sm:p-8">
        {/* Left Column */}
        <Card
          className="relative overflow-hidden rounded-3xl flex flex-col items-left justify-center bg-gray-100 p-6 md:col-span-2"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1661281366900-88b41445a004?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-40 backdrop-blur-sm"></div>
          <div className="relative">
            <span className="inline-block rounded-full bg-white px-4 py-1 text-sm">
              Fashion
            </span>
            <div className="mt-4 space-y-1 text-white">
              <p className="text-lg font-medium">
                Buy less. Choose well. Make it last.
              </p>
            </div>
          </div>
          <div className="relative mt-12 sm:mt-16">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Keep it Simple
              <br />
              and
              <br />
              Stylish
            </h1>
            <span className="mt-6 inline-block rounded-full bg-white px-4 py-1 text-sm">
              Simplicity is the ultimate sophistication. -{" "}
              <b>Leonardo da Vinci</b>
            </span>
          </div>
        </Card>

        {/* Right Column */}
        <div className="space-y-6">
          <Card
            className="relative overflow-hidden rounded-3xl bg-mint-100 p-6"
            style={{
              backgroundImage:
                "url('https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25779218/2024/9/26/020739d8-b346-41bc-a3c9-738ec02896a61727354346824-Red-Tape-Men-Slip-Resistance-Surface-Grip-Walking-Shoes-9391-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative">
              <div className="mb-6">
                <span className="inline-block rounded-full bg-white px-4 py-1 text-sm">
                  Elegance
                </span>
              </div>
              <div>
                <p className="text-lg font-medium text-white">
                  Become A Regular Customer
                </p>
                <p className="mt-2 text-white text-sm">
                  Enter the Fashion world.
                </p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-4 rounded-full bg-black text-white"
                >
                  →
                </Button>
              </div>
            </div>
          </Card>

          <Card className="relative overflow-hidden rounded-3xl bg-gray-800 p-6 text-white">
            <div className="relative">
              <div className="mb-6">
                <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm">
                  Trend
                </span>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-medium">Be Bold,</p>
                <p className="text-2xl sm:text-3xl font-medium">
                  Be Beautiful,
                </p>
                <p className="text-2xl sm:text-3xl font-medium">Be You.</p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-4 rounded-full bg-white text-black"
                >
                  →
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
