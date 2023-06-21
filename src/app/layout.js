'use client'

import './globals.css'
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import { ColorSchemeProvider, MantineProvider, ScrollArea, AppShell, Header } from '@mantine/core';
import { HackboxNavbar } from '@/components/HackboxNavbar';
import { useColorScheme } from '@mantine/hooks';
import { invoke } from '@tauri-apps/api/tauri';
import { theme } from '@/util/theme';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hackbox',
  description: 'Custom Jackbox Games Client',
}

export default function RootLayout({ children }) {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(preferredColorScheme);
  const toggleColorScheme = () => setColorScheme(colorScheme == 'light' ? 'dark' : 'light');
  useEffect(() => {
    setColorScheme(preferredColorScheme);

    const isDev = window.location.hostname == "localhost";

    if (!isDev) {
      window.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
      });

      window.addEventListener("keydown", (e) => {
        if (e.key == "F5") {
          e.preventDefault();
          return false;
        }
      });
    }

    invoke("close_splashscreen");
  }, [preferredColorScheme]);
  return (
    <html lang="en">
      <body className={inter.className}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{colorScheme, ...theme}} withNormalizeCSS withGlobalStyles>
            <ScrollArea w={"100vw"} h={"100vh"} type="always">
              <AppShell
                padding="md"
                layout='alt'
                navbar={<HackboxNavbar />}
              >
                {children}
              </AppShell>
            </ScrollArea>
          </MantineProvider>
        </ColorSchemeProvider>
      </body>
    </html>
  )
}