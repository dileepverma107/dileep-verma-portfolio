// api.ts
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: '/graphql', // Note: This path is relative due to the proxy setup
    cache: new InMemoryCache()
});

export const getUserProfile = async (username: string) => {
    const query = gql`
        query userProfile($username: String!) {
            allQuestionsCount {
                difficulty
                count
            }
            matchedUser(username: $username) {
                username
                profile {
                    userAvatar
                    reputation
                    ranking
                }
                submitStats {
                    acSubmissionNum {
                        difficulty
                        count
                        submissions
                    }
                    totalSubmissionNum {
                        difficulty
                        count
                        submissions
                    }
                }
            problemsSolvedBeatsStats {
                    difficulty
                    percentage
                }
            }
        }
    `;

    try {
        const { data } = await client.query({
            query,
            variables: { username }
        });
        console.log('User Profile Data:', data);

        return data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        return null;
    }
};
