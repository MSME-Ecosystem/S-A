export async function checkIfFileExists(filePath) {
    try {
      const response = await fetch(filePath, { method: 'HEAD' });
      return response.ok;
    } catch (error) {
      console.error(error);
      return false;
    }
  }