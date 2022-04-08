import BadDataException from 'common/types/exception/BadDataException';
import Database from '../utils/Database';

class FileService {
    async getFileById(fileId: string) {
        const gfs = await Database.getFileClient();
        const file = await gfs.findOne({ _id: fileId });

        if (!file) {
            throw new BadDataException('File not found');
        }

        return file;
    }

    async deleteFileById(fileId: string) {
        const gfs = await Database.getFileClient();
        await gfs.deleteOne({ _id: fileId });
    }
}

export default FileService;
