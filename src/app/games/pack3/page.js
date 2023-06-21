'use client'

import { useRouter } from 'next/navigation';
import { Button, Center } from '@mantine/core';

export default function PackThree() {
    const router = useRouter();
    return (
        <Center>
            <Button color="accent" onClick={() => router.push('/')}>pack three</Button>
        </Center>
    )
}