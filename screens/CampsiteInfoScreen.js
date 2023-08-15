import { useState } from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';
import { COMMENTS } from '../shared/comments';
import RenderCampsite from "../features/campsites/RenderCampsite";

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;

    const [comments, setComments] = useState(COMMENTS);

    const renderCommentItem = ({ item }) => {
        return 
    } 

    return (
        <FlatList
            data={comments.filter(
                (comment) => comment.campsiteId === campsite.id
            )}
            renderItem-={renderCommentItem}
        />
    )
};

export default CampsiteInfoScreen;

