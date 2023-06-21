'use client'

import { useRouter } from 'next/navigation';
import { Button, Center } from '@mantine/core';


export default function Settings() {
    let router = useRouter();
    return (
        <Center>
            <Button color="accent" onClick={() => router.push("/")}>Settings</Button>
        </Center>
    )
}
