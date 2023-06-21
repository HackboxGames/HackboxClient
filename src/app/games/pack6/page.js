'use client'

import { useRouter } from 'next/navigation';
import { Button, Center } from '@mantine/core';

export default function PackSix() {
    const router = useRouter();
    return (
        <Center>
            <Button color="accent" onClick={() => router.push('/')}>pack six</Button>
        </Center>
    )
}