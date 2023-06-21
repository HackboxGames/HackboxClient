'use client'

import { useRouter } from 'next/navigation';
import { Button, Center } from '@mantine/core';

export default function PackTwo() {
    const router = useRouter();
    return (
        <Center>
            <Button color="accent" onClick={() => router.push('/')}>pack two</Button>
        </Center>
    )
}