import { Inter, Roboto_Mono, Lusitana } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

export const lusitana = Lusitana({
  weight: ["400", "700"], // specify the weights you want to include
  subsets: ["latin"],
});
