'use client'

import { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from '@mui/material'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useAuth } from '@clerk/nextjs'

export default function FlashcardsPage() {
  const { user } = useAuth()
  const [flashcardSets, setFlashcardSets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchFlashcardSets()
    }
  }, [user])

  const fetchFlashcardSets = async () => {
    try {
      const userDocRef = collection(db, 'users', user.id, 'flashcardSets')
      const flashcardSetsSnapshot = await getDocs(userDocRef)
      const flashcardSetsData = flashcardSetsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setFlashcardSets(flashcardSetsData)
    } catch (error) {
      console.error('Error fetching flashcard sets:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    )
  }

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Flashcard Sets
      </Typography>
      {flashcardSets.length === 0 ? (
        <Typography>No flashcard sets found.</Typography>
      ) : (
        <Grid container spacing={2}>
          {flashcardSets.map((set) => (
            <Grid item xs={12} sm={6} md={4} key={set.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{set.name}</Typography>
                  <Typography variant="body2">
                    {set.flashcards.length} flashcards
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}

