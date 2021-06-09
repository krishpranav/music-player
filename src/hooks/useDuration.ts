import { useEffect, useState } from 'react';
import { resolve } from 'url';

const useDuration = (songs: any[]) => {
    const [duration, setDuration] = useState<any>({});

    useEffect(() => {
        (async () => {
            let data: any = {};
            const durationPromises = songs.map(song => {
                const audio = document.createElement('audio');
                audio.src = URL.createObjectURL(song);

                return new Promise<any>(resolve => {
                    audio.addEventListener(
                        'loadmetadata',
                        function() {
                            resolve({ [song.name]: audio.duration });
                        },
                        false,
                    );
                });
            });
        })
    })

}