import { Button, Center, CircularProgress, Box, Input, Text } from '@chakra-ui/react';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import getText from '../services/getText';

const BookSpeech = () => {
	const [text, setText] = useState("");
	const [textArray, setTextArray] = useState([])
	const [loading, setLoading] = useState(true);
	const [wordMap, setWordMap] = useState({});
	const [page, setPage] = useState(1);
	const [charIndex, setCharIndex] = useState(0);
	const [indexMap, setIndexMap] = useState({});
	const utterance = useRef();
	const fetchText = useRef();
	const { id } = useParams();

	fetchText.current = async () => {
		setLoading(true);
		const [data] = await getText(id, page);
		setLoading(false);
		if (!data) return;
		const wordsArray = data.split(' ');
		const map = {}
		let indx = 0;
		let word = ""
		for(let i=0; i<data.length; i++){
			if(data[i] === ' ' || i === data.length-1){
				map[indx] = word;
				word = ""
				indx = i+1;
			}else{
				word+=data[i];
			}
		}
		const indexMaps = {}
		const keys = Object.keys(map);
		keys.forEach((key, index)=>indexMaps[key] = index)
		setIndexMap(indexMaps);
		setWordMap(map);
		setTextArray(wordsArray);
		setText(data);
	}

	useEffect(() => {
		fetchText.current();
	}, [page])

	const onboundry = useCallback((e) => {
		if (e.charIndex !== 0)
			setCharIndex(e.charIndex);
	}, [])

	useEffect(() => {
		utterance.current = new SpeechSynthesisUtterance();
		utterance.current.addEventListener('boundary', onboundry);

		return () => utterance.current.removeEventListener('onboundry', onboundry);
	}, [onboundry])

	const handlePlay = () => {
		speechSynthesis.cancel();
		utterance.current.lang = 'en-GB';
		utterance.current.rate = 1;
		utterance.current.text = text;
		speechSynthesis.speak(utterance.current);
	}

	const handlePageChange = (e) => {
		const value = e.currentTarget.value;
		if (value && value > 0 && !isNaN(parseInt(value))) setPage(parseInt(value));
	}

	return (
		<Center flexDir="column" justifyContent="space-between" p={10} h="calc(100vh-80px)px">
			{loading ? <Box h="calc(100vh - 260px)">
				<CircularProgress isIndeterminate color="blackAlpha.900"></CircularProgress>
			</Box> : <Box textAlign='justify' h="calc(100vh - 260px)">
				{textArray.map((word, index) => <Text
					key={index}
					transition="all 0.2s ease-in-out"
					backgroundColor={wordMap[charIndex] === word && indexMap[charIndex] === index? 'blackAlpha.800': 'transparent'}
					color={wordMap[charIndex] === word && indexMap[charIndex] === index? 'white' : 'black'}
					display="inline"> {word} </Text>)}
			</Box>}
			<Center mb={5}>
				<Button colorScheme="telegram" onClick={() => page > 1 && setPage(p => p - 1)}>Prev Page</Button>
				<Input width="20%" minW='80px' value={page} onChange={handlePageChange} />
				<Button colorScheme="orange" onClick={() => setPage(p => p + 1)}>Next Page</Button>
			</Center>
			<Center justifySelf="flex-end">
				<Button onClick={handlePlay} color='white' bgColor="green" _hover={{ opacity: 0.8 }} >Play</Button>
				<Button onClick={() => speechSynthesis.pause()} color='white' bgColor="black" _hover={{ opacity: 0.8 }} >Pause</Button>
				<Button onClick={() => speechSynthesis.resume()} color='white' bgColor="brown" _hover={{ opacity: 0.8 }} >Resume</Button>
			</Center>
		</Center>
	)
}

export default BookSpeech;