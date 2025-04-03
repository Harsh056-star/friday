'use server';

import { auth, db } from '@/firebase/admin';

interface SignUpParams {
  uid: string;
  name: string;
  email: string;
}

export async function signUp(params: SignUpParams) {
  const { uid, name, email } = params;

  try {
    const userRecord = await db.collection('users').doc(uid).get();

    if (userRecord.exists) {
      return {
        success: false,
        message: 'User already exists. Please sign in instead.',
      };
    }

    await db.collection('users').doc(uid).set({
      name,
      email,
    });

    return {
      success: true,
      message: 'Account created successfully.',
    };
  } catch (error: any) {
    console.error('Error creating a user:', error);

    if (error.code === 'auth/email-already-exists') {
      return {
        success: false,
        message: 'This email is already in use.',
      };
    }

    return {
      success: false,
      message: 'Failed to create an account.',
    };
  }
}